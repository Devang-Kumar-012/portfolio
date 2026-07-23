"use client"

import * as React from "react"
import { XIcon } from "lucide-react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { DialogOverlay } from "radix-ui/dialog"

function Dialog({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
    return <DialogPrimitive.Root data-slot="dialog" {...props}/>
function DialogOverlay({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
    return(
        <DialogPrimitive.Overlay
        data-slot="dialog-overlay"
        className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]: fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-9998 bg-black/50 backdrop-blur-sm",
            className
        )}
        {...props}
        />
    )
}

function DialodPortal({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
    return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogContent({
    className,
    children,
    showCloseButton = true,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) & {
    showCloseButton?: boolean
}) {
    return(
        <DialogPortal data-slot="dialog-portal">
            <DialogOverlay/>
            <DialogPrimitive.Content
            data-slot="dialog-content"
            className={cn(
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]: fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] z-9998 grid w-full max-w-[calc(100%-2rem)] translate-y-[-50%] rounded-lg border p-6 shadow",
            )}></DialogPrimitive.Content>
            </DialogPortal>
            )
        }