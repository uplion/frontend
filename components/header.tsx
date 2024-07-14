import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { auth } from '@/auth'
import { Button, buttonVariants } from '@/components/ui/button'
import {
    IconGitHub,
    IconUplion,
} from '@/components/ui/icons'

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
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
            <div className="flex items-center">
                <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
                    <UserOrLogin />
                </React.Suspense>
            </div>
            <div className="flex items-center justify-end space-x-2">
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
