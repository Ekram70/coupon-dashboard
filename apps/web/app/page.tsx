import { Main } from '@/components/main/Main';
import { Sidebar } from '@/components/sidebar/Sidebar';

export default function Home() {
  return (
    <div className="flex h-screen space-x-2 p-2">
      <Sidebar className="basis-1/6" />
      <Main className="basis-5/6" />
    </div>
  );
}
