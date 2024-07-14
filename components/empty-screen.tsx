import Image from "next/image";

export function EmptyScreen() {
    return (
        <div className="mx-auto max-w-2xl px-4">
            <div className="flex flex-col gap-2 rounded-lg border bg-background p-8 text-center">
                <div
                    className="size-[200px] z-1 relative flex place-items-center mx-auto"
                >
                    <Image
                        src="/logo.png"
                        alt="logo"
                        height={200}
                        width={200}
                        className="object-cover absolute top-0 left-0"
                    ></Image>
                    <div className=" absolute top-0 left-0 size-full z-1" style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 0) 40%, white 70%)" }}></div>
                </div>
                <h1 className="text-lg font-semibold">
                    Welcome to Uplion  AI chatbot!
                </h1>
                <p className="leading-normal text-muted-foreground">
                    Enjoy the experience of chatting with our AI chatbot!
                </p>
            </div>
        </div>
    )
}
