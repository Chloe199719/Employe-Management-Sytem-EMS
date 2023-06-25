"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { Employee } from "@prisma/client";

const formSchema = z.object({
  teamName: z
    .string()
    .min(2, {
      message: "Team name must be at least 2 characters long.",
    })
    .max(12, {
      message: "Team name must be at most 12 characters long.",
    }),
  task: z
    .string()
    .min(2, {
      message: "Task must be at least 2 characters long.",
    })
    .optional(),
  members: z.array(z.string()).optional(),
});

export function CreateTeamForm() {
  const noteam = useQuery({
    queryKey: ["employenoTeam"],
  });
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="teamName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Name</FormLabel>
              <FormControl>
                <Input placeholder="Team Name" {...field} />
              </FormControl>
              <FormDescription>This is the name of your team.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task</FormLabel>
              <FormControl>
                <Input placeholder="Create an EMS..." {...field} />
              </FormControl>
              <FormDescription>
                Assign a task to your team. (Optional)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {(noteam.data as Employee[] | undefined) && (
          <FormField
            control={form.control}
            name="members"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Sidebar</FormLabel>
                  <FormDescription>
                    Select the items you want to display in the sidebar.
                  </FormDescription>
                </div>
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
