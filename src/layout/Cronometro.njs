import Nullstack from 'nullstack';

class Cronometro extends Nullstack {

    count = 60;
    
    async hydrate() {
        this.count--;
        let time = setInterval(() => {
            this.count--

            if(this.count === 0) {

                clearInterval(time)
            }
        }, 1000);
    }


    
    render() {
      return (
        <h1> 
          Seu tempo está acabando {this.count} segundos.
        </h1>
      )
    }
}

export default Cronometro;