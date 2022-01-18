import React from "react";
import CreateAverageFunArray from "../Calculators/CreateAverageFunArray";
import { VictoryAxis, VictoryBar, VictoryGroup, VictoryChart, VictoryLabel, VictoryTheme } from "victory";
import CreateAverageDifficultyArray from "../Calculators/CreateAverageDifficultyArray";


const MainChart = () => {
    const funData = CreateAverageFunArray()
    const difData = CreateAverageDifficultyArray()
    return (
        <div>
            <VictoryGroup
                domainPadding={10}
                theme={VictoryTheme.material}
                height={150}
                width={800}>
                {/* <VictoryAxis 
                    style={{
                        tickLabels: { angle: -60, fontSize: 5 } 
                    }} 
                    />
                <VictoryAxis dependentAxis /> */}
                
                <VictoryBar data={funData} x="assignment" y="averageFun" />
                <VictoryBar data={difData} x="assignment" y="averageDifficulty" />
                <VictoryLabel text="angled labels" />
                
            </VictoryGroup>
        </div>
    );
}

export default MainChart;
