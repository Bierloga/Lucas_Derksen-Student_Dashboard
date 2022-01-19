import React from "react";
import CreateAverageArray from "../Calculators/CreateAverageArray";
import { VictoryAxis, VictoryBar, VictoryGroup, VictoryChart, VictoryLabel } from "victory";



const MainChart = () => {
    const rawData = CreateAverageArray()
    const half = Math.ceil(rawData.length / 2)
    const firstHalf = rawData.splice(0, half)
    const secondHalf = rawData.splice(-half)
    return (
        <div className="testing">
            <VictoryChart
                height={250}
                width={800}
                animate={{ duration: 1000, onLoad: { duration: 250 } }}
                style={{ background: { fill: "lightblue" } }}
            >
                <VictoryGroup
                    offset={8}
                    style={{ data: { stroke: "black", strokeWidth: 1 } }}>
                    <VictoryBar
                        data={firstHalf}
                        x="assignment"
                        y="averageFun"
                        style={{ data: { fill: "darkblue" } }}
                        alignment="start"
                        barWidth={8}
                    />
                    <VictoryBar
                        data={firstHalf}
                        x="assignment"
                        y="averageDifficulty"
                        style={{ data: { fill: "orange" } }}
                        alignment="start"
                        barWidth={8} />
                </VictoryGroup>
                <VictoryAxis
                    label="Assignments"
                    style={{
                        tickLabels: { angle: -60, fontSize: 8, padding: 15 },
                        grid: { stroke: "#818e99", strokeWidth: 0.5 },
                        axisLabel: { padding: 30 }
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    label="Rating 0-5"
                    style={{
                        tickLabels: { fontSize: 8 },
                        grid: { stroke: "#818e99", strokeWidth: 0.5 }
                    }}
                    domain={[0, 5]}
                />
            </VictoryChart>
            <VictoryChart
                height={250}
                width={800}
                animate={{ duration: 1000, onLoad: { duration: 250 } }}
                style={{ background: { fill: "lightblue" } }}
            >
                <VictoryGroup
                    offset={8}
                    style={{ data: { stroke: "black", strokeWidth: 1 } }}>
                    <VictoryBar
                        data={secondHalf}
                        x="assignment"
                        y="averageFun"
                        style={{ data: { fill: "darkblue" } }}
                        alignment="start"
                        barWidth={8}
                    />
                    <VictoryBar
                        data={secondHalf}
                        x="assignment"
                        y="averageDifficulty"
                        style={{ data: { fill: "orange" } }}
                        alignment="start"
                        barWidth={8} />
                </VictoryGroup>
                <VictoryAxis
                    label="Assignments"
                    style={{
                        tickLabels: { angle: -60, fontSize: 8, padding: 15 },
                        grid: { stroke: "#818e99", strokeWidth: 0.5 },
                        axisLabel: { padding: 30 }
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    label="Rating 0-5"
                    style={{
                        tickLabels: { fontSize: 8 },
                        grid: { stroke: "#818e99", strokeWidth: 0.5 }
                    }}
                    domain={[0, 5]}
                />
            </VictoryChart>
        </div>
    );
}

export default MainChart;
