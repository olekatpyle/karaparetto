export default function Page() {
    return (
        <div className="">
            <nav className="w-1/4 h-screen sticky float-left"></nav>
            <nav className="w-1/4 h-screen sticky float-right"></nav>
            <div className="grid grid-flow-row">
                <div className="text-4xl my-8 flex items-center justify-center">
                    KARAPARETTO
                </div>
                <div className="mb-4 grid grid-cols-4 gap-10  place-items-center ">
                    <div className="box-content w-48 h-48 bg-white">1</div>
                    <div className="box-content w-48 h-48 bg-white">2</div>
                    <div className="box-content w-48 h-48 bg-white">3</div>
                    <div className="box-content w-48 h-48 bg-white">4</div>
                    <div className="box-content w-48 h-48 bg-white">1</div>
                    <div className="box-content w-48 h-48 bg-white">2</div>
                    <div className="box-content w-48 h-48 bg-white">3</div>
                    <div className="box-content w-48 h-48 bg-white">4</div>
                    <div className="box-content w-48 h-48 bg-white">1</div>
                    <div className="box-content w-48 h-48 bg-white">2</div>
                    <div className="box-content w-48 h-48 bg-white">3</div>
                    <div className="box-content w-48 h-48 bg-white">4</div>
                    <div className="box-content w-48 h-48 bg-white">1</div>
                    <div className="box-content w-48 h-48 bg-white">2</div>
                    <div className="box-content w-48 h-48 bg-white">3</div>
                    <div className="box-content w-48 h-48 bg-white">4</div>
                </div>
                <div className="flex items-center justify-center">
                    <button className="my-14 text-2xl">Shuffle</button>
                </div>
            </div>
        </div>
    );
}
