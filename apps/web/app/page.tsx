import {Sidebar} from "@/components/sidebar/Sidebar";
import {Main} from "@/components/main/Main";

export default function Home() {
    return (
        <div className='flex h-screen p-2 space-x-2'>
            <Sidebar className='basis-1/6'/>
            <Main className='basis-5/6'/>
        </div>
    );
}
