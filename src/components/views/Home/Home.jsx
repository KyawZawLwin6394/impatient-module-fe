import DoubleNavbar from "../Sidebar/Sidebar"

export default function Home() {

    return (
        <div class="flex flex-row flex-auto">
            <div className="flex-col h-auto">
                <DoubleNavbar />
            </div>
            <div className="flex-col h-auto">
                <div>
                    Container
                </div>
            </div>
        </div>
    )
}