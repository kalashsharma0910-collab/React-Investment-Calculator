export default function UserInput({handleChange,inputValues})
{
    return (
     
          <section id="user-input">
  <div className="input-group">

    <label>
      Initial investment
      <input  type="number" onChange={(e)=>handleChange( 'initialInvestment',e.target.value)}
        value={inputValues.initialInvestment}/>
    </label>

    <label>
      Annual investment
      <input  type="number"   onChange={(e)=>handleChange( 'annualInvestment',e.target.value)}
        value={inputValues.annualInvestment}/>
    </label>
  </div>

  <div className="input-group">
    <label>
      Expected return (%)
      <input  type="number"   onChange={(e)=>handleChange( 'expectedReturn',e.target.value)} 
        value={inputValues.expectedReturn}/>
    </label>

    <label>
      Duration (years)
      <input  type="number"  onChange={(e)=>handleChange( 'duration',e.target.value) }
        value={inputValues.duration}/>
    </label>
  </div>
</section>
    )
}