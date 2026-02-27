import React from "react";
import DivProps from "@/types/DivProps";
import {cn} from "@/lib/utils";

export const BlockWrapper = (
    {children, className, ...props}: Readonly<DivProps>
) => (<div className={cn('p-4 rounded-md', className)} {...props}>{children}</div>)