import React from 'react';

class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            //counter will skip adding index to the first child so i need to add it in scss
            counter:1,
            clear: false,
            but_disable: false,
        }
        this.Timer = this.Timer.bind(this);
        this.getChildren = this.getChildren.bind(this);
    }
    componentDidMount(){
        this.getChildren();
    }
    Timer(i, direction){
        let slider = document.getElementsByClassName("home-slider")
        var elem = slider[i];
        
        (direction==="next")?(elem.style.transform = "translate3d(100%,0,0)"):(elem.style.transform = "translate3d(-100%,0,0")
        elem.style.display="none"
        this.setState({
            but_disable:true
        })
        //preventing multiple function calls
        setTimeout(()=>{
            this.setState({
                but_disable:false
            })
        },1000)

        setTimeout(() => {
            
            elem.style.display = "block";
        }, 10);

        setTimeout(() => {

            elem.style.display = "block";
            elem.style.transform = "translate3d(0,0,0)";
            elem.style.zIndex = '1';
        }, 30);

        setTimeout(()=>{
            var oldElem;
            if(direction === "next"){
                if(i === 0){
                    oldElem = 4;
                }else{
                    oldElem = i-1;
                }
            }else{
                if(i === 4){

                    oldElem = 0;
                }else{
                    oldElem= i+1
                }
            }
            
            
            slider[oldElem].style.display = "none";
            slider[oldElem].style.zIndex = '0';
            console.log("old Elem", oldElem);
            console.log("counter", this.state.counter);
            console.log("i in the timer", i);
            
            
            
        },850)


    }
    moveNext(direction){
        console.log(direction);
        
        if(!this.state.but_disable){

            console.log(this.state.counter);
            direction==="next"?(
                this.setState({
                    counter: this.state.counter +1
                })
            ):(
                this.setState({
                    counter:this.state.counter -1
                })
            );
            if(this.state.counter >= 4){
                this.setState({
                    counter: 0,
                })
            }
            else if((this.state.counter <= 0)&&(direction === "prev")){
                this.setState({
                    counter:4
                })
                
            }
            
            this.Timer(this.state.counter, direction)
            //stop interval
            this.setState({
                clear:true,
            })
        }else{
            console.log("disable");
            
        }

    }
    getChildren(){
        let slider = document.getElementsByClassName("home-slider")
        
        var moveSlider = () => {
            if (this.state.clear) {
                clearInterval(myInterval)
                //restart loop
                this.setState({
                    clear:false,
                })
                this.getChildren()

            } else {
                if (this.state.counter >= 5) {
                    this.setState({
                        counter :1
                    })
                    this.Timer(0, "next")
                    
                } else {
                    
                    // console.log("counter logger", counterStrike);
                    //create slider here
                  this.Timer(this.state.counter, "next");
                  this.setState({
                      counter: this.state.counter + 1
                  })
                  
                   
                }
            }
        }

        var myInterval = setInterval(moveSlider, 5000);
        
    }
    render(){

    let height = window.innerHeight;
        return (
            <div className="home" style={{ height: height }}>

                <div className="home-gradient">
                    <div className="button-container">
                        <div onClick={() => this.moveNext("prev")} className="button-slider">Prev</div>
                        <div onClick={() =>this.moveNext("next")} className="button-slider">next</div>                    
                    </div>
                </div>

                <div style={{transform:"translate3d(0,0,0)"}} id="x-ubimax" className="home-slider">
                    <div className="home-text">
                        <h1>x ubimax</h1>
                        <h2>for something something</h2>
                    </div>
                    
                </div>
                <div id="x-assist" className="home-slider">
                    <div className="home-text">
                        <h1>x assist</h1>
                        <h2>for something something</h2>
                    </div>

                </div>
                <div id="x-pick" className="home-slider">
                    <div className="home-text">
                        <h1>x pick</h1>
                        <h2>for something something</h2>
                    </div>

                </div>
                <div id="x-make" className="home-slider">
                    <div className="home-text">
                        <h1>x make</h1>
                        <h2>for something something</h2>
                    </div>

                </div>
                <div id="x-inspect" className="home-slider">
                    <div className="home-text">
                        <h1>x inspect</h1>
                        <h2>for something something</h2>
                    </div>

                </div>
            </div>
        )
    }


}
export default Background;