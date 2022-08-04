import { trpc } from '@/util/trpc';
import { Navbar, View } from '@/components';

export default function Page() {
    return (
        <div className="">
            <Navbar float={'float-left'} />
            <Navbar float={'float-right'} />
            <View />
        </div>
    );
}
