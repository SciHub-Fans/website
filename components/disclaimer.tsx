export const Disclaimer = () => {
    return (
        <div className="flex w-full flex-col gap-2 justify-center [background:rgba(227,45,45,0.12)] backdrop-blur px-4 md:px-8 lg:px-16 xl:px-60 py-6 border-y-black border-t border-solid border-b mb-[48px]">
            <p className="text-[#E32D2D]">DISCLAIMER:</p>
            <div className="flex flex-col gap-1">
                <ol className="list-decimal pl-4">
                    <li>$scihub is a community meme token, launched by an anonymous dev.</li>
                    <li>$scihub is not an official Sci-Hub token, is not affiliated with Sci-Hub, and does not own Sci-Hub.</li>
                    <li>The price of meme tokens fluctuates greatly and your investment may be at great risk.</li>
                </ol>
            </div>
        </div>
    );
}

export default Disclaimer