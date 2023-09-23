"use client"

import { useEffect } from "react"
import  Chart  from "chart.js";
function page() {
    useEffect(() => {

        var canvas =  document.getElementById('myChart') as HTMLCanvasElement;

        var ctx =canvas?.getContext('2d');
        var myChart =  new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["iron man", "thor", "hulk",],
                datasets: [{ 
                    data: [66],
                    label: "Applied",
                    borderColor: "rgb(109, 253, 181)",
                    backgroundColor: "rgb(109, 253, 181,0.5)",
                    borderWidth: 2
                }, {
                    data: [40],
                    label: "Accepted",
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgb(75, 192, 192,0.5)",
                    borderWidth: 2
                }, {
                    data: [20], 
                    label: "Pending",
                    borderColor: "rgb(255, 205, 86)",
                    backgroundColor: "rgb(255, 205, 86,0.5)",
                    borderWidth: 2
                }, 
                ]
            },
        });
    }, [])


    return (
        <>
            {/* Bar chart */}
            <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Bar Chart</h1>
            <div className="w-[1100px] h-screen flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    )
}

export default page;