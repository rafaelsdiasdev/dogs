import React from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';
import styles from './UserStatsGraphs.module.css';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    setTotal(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((acc, curr) => acc + curr),
    );
    setGraph(graphData);
    console.log(data);
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
      <div>
        <VictoryPie data={graph} />
      </div>
    </section>
  );
};

export default UserStatsGraphs;
