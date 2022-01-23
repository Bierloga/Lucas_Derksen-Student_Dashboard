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
            <div className="remove-btns">
                <label for="slice-fun">Show Fun</label>
                <input
                    className="slice-btn"
                    id="slice-fun"
                    type="checkbox"
                    checked={showFun}
                    name="showFun"
                    onChange={() => setShowFun(showFun => !showFun)}>
                </input>
                <label for="slice-dif">Show Difficulty</label>
                <input
                    className="slice-btn"
                    id="slice-dif"
                    type="checkbox"
                    checked={showDif}
                    name="showDif"
                    onChange={() =>setShowDif(showDif => !showDif)
                    }>
                </input>
            </div>
            <div className="testing">
                <VictoryChart
                    height={250}
                    width={800}
                    animate={{ duration: 1000, onLoad: { duration: 250 } }}
                    style={{ background: { fill: '#f2f2f2' } }}
                >
                    <VictoryAxis
                        label="Assignments"
                        style={{
                            tickLabels: { angle: -60, fontSize: 8, padding: 15, fill: '#2b6777' },
                            grid: { stroke: "#818e99", strokeWidth: 0.5 },
                            axisLabel: { padding: 30, fill: '#2b6777' }
                        }}
                        tickValues={firsthalfTick}
                    />
                    <VictoryAxis
                        dependentAxis
                        label="Rating 0-5"
                        style={{
                            axisLabel: { fill: '#2b6777' },
                            tickLabels: { fontSize: 8, fill: '#2b6777' },
                            grid: { stroke: "#818e99", strokeWidth: 0.5 }
                        }}
                        domain={[0, 6]}
                        tickValues={[0, 1, 2, 3, 4, 5]}
                    />
                    <VictoryLegend
                        centerTitle
                        data={[
                            { name: "Fun", symbol: { fill: '#2b6777' }, labels: { fill: "#2b6777" } },
                            { name: "Difficulty", symbol: { fill: '#52ab98' }, labels: { fill: "#2b6777" } }
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
                            style={{ data: { fill: '#2b6777' } }}
                            alignment="start"
                            barWidth={8}
                            cornerRadius={4}
                        />}
                        {showDif && <VictoryBar
                            data={props.firstHalf}
                            x="assignment"
                            y="difficulty"
                            style={{ data: { fill: '#52ab98' } }}
                            alignment="start"
                            barWidth={8}
                            cornerRadius={4} />}
                    </VictoryGroup>

                </VictoryChart>
                <VictoryChart
                    height={250}
                    width={800}
                    animate={{ duration: 1000, onLoad: { duration: 250 } }}
                    style={{ background: { fill: '#f2f2f2' } }}
                >
                    <VictoryAxis
                        label="Assignments"
                        style={{
                            axisLabel: { fill: '#2b6777', padding: 30 },
                            tickLabels: { angle: -60, fontSize: 8, padding: 15, fill: '#2b6777' },
                            grid: { stroke: "#818e99", strokeWidth: 0.5 },
                        }}
                        tickValues={secondHalfTick}
                    />
                    <VictoryAxis
                        dependentAxis
                        label="Rating 0-5"
                        style={{
                            axisLabel: { fill: '#2b6777' },
                            tickLabels: { fontSize: 8, fill: "#2b6777" },
                            grid: { stroke: "#818e99", strokeWidth: 0.5 }
                        }}
                        domain={[0, 6]}
                        tickValues={[0, 1, 2, 3, 4, 5]}
                    />
                    <VictoryLegend
                        centerTitle
                        data={[
                            { name: "Fun", symbol: { fill: '#2b6777' }, labels: { fill: "#2b6777" } },
                            { name: "Difficulty", symbol: { fill: '#52ab98' }, labels: { fill: "#2b6777" } }
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
                            style={{ data: { fill: '#2b6777' } }}
                            alignment="start"
                            barWidth={8}
                            cornerRadius={4}
                        />}
                        {showDif && <VictoryBar
                            data={props.secondHalf}
                            x="assignment"
                            y="difficulty"
                            style={{ data: { fill: '#52ab98' } }}
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
