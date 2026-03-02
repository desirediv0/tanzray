import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

// Basic sheet pattern using Radix Dialog
const Sheet = Dialog.Root;
const SheetTrigger = Dialog.Trigger;

const SheetContent = React.forwardRef(({ className, children, ...props }, ref) => (
    <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        <Dialog.Content
            ref={ref}
            className={cn(
                "fixed right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-xl p-6",
                className
            )}
            {...props}
        >
            {children}
        </Dialog.Content>
    </Dialog.Portal>
));
SheetContent.displayName = 'SheetContent';

const SheetHeader = ({ className, ...props }) => (
    <div className={cn('mb-4', className)} {...props} />
);
SheetHeader.displayName = 'SheetHeader';

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
    <Dialog.Title
        ref={ref}
        className={cn('text-lg font-semibold text-[#2C2C2C]', className)}
        {...props}
    />
));
SheetTitle.displayName = 'SheetTitle';

const SheetClose = Dialog.Close;

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose };
