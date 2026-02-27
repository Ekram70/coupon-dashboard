import DivProps from "@/types/DivProps";
import {cn} from "@/lib/utils";
import {MenuGroup} from "@/components/menu-group/MenuGroup";
import {BlockWrapper} from "@/components/wrappers/BlockWrapper";

export const Sidebar = ({className, ...props}: DivProps) => (
    <BlockWrapper {...props} className={cn('bg-gray-100', className)}>
        <MenuGroup/>
    </BlockWrapper>
)