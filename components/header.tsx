'use client';

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
    IconGitHub,
    IconUplion,
} from '@/components/ui/icons'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


async function UserOrLogin() {
    return (
        <>
            <Button asChild variant={"ghost"}>
                <Link href="/new" rel="nofollow" className=' font-light text-xl'>
                    <span className='flex size-10 overflow-hidden shrink-0 select-none mr-2 rounded-md '>
                        <IconUplion size={40} />
                    </span>
                    Uplion
                </Link>
            </Button>
        </>
    )
}

export function Header() {

    const [model, setModel] = React.useState(localStorage.getItem("model") ?? 'gpt-4o-mini')
    const [apiKey, setApiKey] = React.useState(localStorage.getItem("apiKey") ?? '')

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
            <div className="flex items-center">
                <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
                    <UserOrLogin />
                </React.Suspense>
            </div>
            <div className="flex items-center justify-end space-x-2">
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button>Settings</Button>
                    </DrawerTrigger>
                    <DrawerContent className="mb-8">
                        <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                                <DrawerTitle>Settings</DrawerTitle>
                                <DrawerDescription>
                                    Change your settings of AI model or navigate to the
                                    <Link
                                        href="/admin"
                                        className='mx-1 text-secondary-foreground underline'
                                    >Admin Panel</Link>.
                                </DrawerDescription>
                            </DrawerHeader>
                            <div className="px-4 space-y-4">
                                <div>
                                    <Label htmlFor='model'>Model</Label>
                                    <Input id='model' defaultValue={model} onChange={(e) => {
                                        setModel(e.target.value)
                                        localStorage.setItem("model", e.target.value)
                                    }}></Input>
                                </div>
                                <div>
                                    <Label htmlFor='apikey'>API Key</Label>
                                    <Input id='apikey' defaultValue={apiKey} onChange={(e) => {
                                        setApiKey(e.target.value)
                                        localStorage.setItem("apiKey", e.target.value)
                                    }}></Input>
                                </div>
                            </div>
                            <DrawerFooter>
                                <DrawerClose asChild>
                                    <Button className='mt-2'>Close</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>
                <a
                    target="_blank"
                    href="https://github.com/uplion"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: 'outline' }))}
                >
                    <IconGitHub />
                    <span className="hidden ml-2 md:flex">GitHub</span>
                </a>
            </div>
        </header>
    )
}
