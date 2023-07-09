"use client";

import Link from "next/link";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import React, {memo} from 'react';
import {useForm as formSpree, ValidationError} from '@formspree/react';

import {Button} from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea"
import {useForm} from "react-hook-form";
import toast, {Toaster} from 'react-hot-toast';

const formSubmitSuccess = () => toast.success("Successfully Sent email!", {
    icon: '👏',
})

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({message: "Email is invalid."}),
    content: z.string().min(2, {
        message: "Message must be at least 2 characters.",
    }),
});
const MessageForm = () => {
    const [state, handleSubmit] = formSpree("xoqoqjgw");
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            content: "",
        },
    });
    if (state.succeeded) {
        formSubmitSuccess();
        form.reset()
    }

    return (
        <div className="w-full sm:w-1/2 flex flex-col items-center px-4 sm:pl-12 lg:pl-0">
            <Toaster position="top-center" reverseOrder={true}/>
            <h4 className="text-2xl text-center font-semibold font-rubik text-white mb-8">
                Contact Me
            </h4>
            <Form {...form}>
                <form onSubmit={handleSubmit} className="space-y-8 w-full lg:w-[60%]">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="text-white">Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your name" {...field} className="" name="name"/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="text-white">Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} name="email"/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="text-white">Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Enter your message"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        disabled={state.submitting}
                        className="bg-pink-500 text-white hover:text-white hover:bg-pink-400 w-full py-5 font-semibold"
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default memo(MessageForm);
