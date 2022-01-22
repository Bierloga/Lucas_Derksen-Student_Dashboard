import React, { useState } from "react";
import { VictoryAxis, VictoryBar, VictoryGroup, VictoryChart, VictoryLegend } from "victory";
import CreateAssignmentArray from "../Calculators/CreateAssignmentArray";

const MainChart = (props) => {
    const [showFun, setShowFun] = useState(true)
    const [showDif, setShowDif] = useState(true)
    const tickValues = CreateAssignmentArray()
    const half = Math.ceil(tickValues.length / 2)
    const firsthalfTick = tickValues.splice(0, half)
    firsthalfTick.push("")
    const secondHalfTick = tickValues.splice(-half)
    secondHalfTick.push("")
    return (
        <div>
            <div>
                <label>Remove Fun?</label><input type="checkbox" name="showFun" onChange={() => setShowFun(showFun => !showFun)}></input>
                <label>Remove Difficulty?</label><input type="checkbox" name="showDif" onChange={() => setShowDif(showDif => !showDif)}></input>
            </div>
            <div className="testing">
                <VictoryChart
                    height={250}
                    width={800}
                    animate={{ duration: 1000, onLoad: { duration: 250 } }}
                    style={{ background: { fill: "lightblue" } }}
                >
                    <VictoryAxis
                        label="Assignments"
                        style={{
                            tickLabels: { angle: -60, fontSize: 8, padding: 15 },
                            grid: { stroke: "#818e99", strokeWidth: 0.5 },
                            axisLabel: { padding: 30 }
                        }}
                        tickValues={firsthalfTick}
                    />
                    <VictoryAxis
                        dependentAxis
                        label="Rating 0-5"
                        style={{
                            tickLabels: { fontSize: 8 },
                            grid: { stroke: "#818e99", strokeWidth: 0.5 }
                        }}
                        domain={[0, 6]}
                        tickValues={[0,1,2,3,4,5]}
                    />
                    <VictoryLegend
                        centerTitle
                        data={[
                            { name: "Fun", symbol: { fill: "darkblue" } },
                            { name: "Difficulty", symbol: { fill: "orange" } }
                        ]}
                        orientation="horizontal"
                        x={300}
                        y={50}
                    />

                    <VictoryGroup
                        offset={8}
                        style={{ data: { stroke: "black", strokeWidth: 1 } }}>
                        {showFun && <VictoryBar
                            data={props.firstHalf}
                            x="assignment"
                            y="fun"
                            style={{ data: { fill: "darkblue" } }}
                            alignment="start"
                            barWidth={8}
                            cornerRadius={4}
                        />}
                        {showDif && <VictoryBar
                            data={props.firstHalf}
                            x="assignment"
                            y="difficulty"
                            style={{ data: { fill: "orange" } }}
                            alignment="start"
                            barWidth={8}
                            cornerRadius={4} />}
                    </VictoryGroup>

                </VictoryChart>
                <VictoryChart
                    height={250}
                    width={800}
                    animate={{ duration: 1000, onLoad: { duration: 250 } }}
                    style={{ background: { fill: "lightblue" } }}
                >
                    <VictoryAxis
                        label="Assignments"
                        style={{
                            tickLabels: { angle: -60, fontSize: 8, padding: 15 },
                            grid: { stroke: "#818e99", strokeWidth: 0.5 },
                            axisLabel: { padding: 30 }
                        }}
                        tickValues={secondHalfTick}
                    />
                    <VictoryAxis
                        dependentAxis
                        label="Rating 0-5"
                        style={{
                            tickLabels: { fontSize: 8 },
                            grid: { stroke: "#818e99", strokeWidth: 0.5 }
                        }}
                        domain={[0, 6]}
                        tickValues={[0,1,2,3,4,5]}
                    />
                    <VictoryLegend
                        centerTitle
                        data={[
                            { name: "Fun", symbol: { fill: "darkblue" } },
                            { name: "Difficulty", symbol: { fill: "orange" } }
                        ]}
                        orientation="horizontal"
                        x={300}
                        y={50}
                    />
                    <VictoryGroup
                        offset={8}
                        style={{ data: { stroke: "black", strokeWidth: 1 } }}>
                        {showFun && <VictoryBar
                            data={props.secondHalf}
                            x="assignment"
                            y="fun"
                            style={{ data: { fill: "darkblue" } }}
                            alignment="start"
                            barWidth={8}
                            cornerRadius={4}
                        />}
                        {showDif && <VictoryBar
                            data={props.secondHalf}
                            x="assignment"
                            y="difficulty"
                            style={{ data: { fill: "orange" } }}
                            alignment="start"
                            barWidth={8}
                            cornerRadius={4} />}
                    </VictoryGroup>
                </VictoryChart>
            </div>
        </div>
    );
}

export default MainChart;
