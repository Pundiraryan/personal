import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis} from 'recharts';
function App() {
  const array=[
    {sname:"aryan",
    roll:12},
    {sname:"govind",roll:20},
    {sname:"others",roll:15}
  ]
  return (
    <>
        <div className="App">
          this is react
      </div>
      <ResponsiveContainer width="50%" aspect={3}>
        <BarChart data={array} width={400} height={400}>
          <XAxis dataKey="sname" />
          <YAxis />
           <Bar dataKey="roll"/>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
