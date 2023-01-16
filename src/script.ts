// Array, tuple, modificatori di accesso
let mioArray:number[] = [1,2,3,4,5,6,7,8,9]
let tupla : [string,number,string] = ['rosario',30,'giovanni']

class Persona{
    protected nome:string;
    protected cognome:string;
    private eta:number;
    constructor(nome:string,cognome:string,anno:number){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = anno;
    }
    geteta(){
        return this.eta;// Per accedere ad una prorpietà private ho bisogno di un metodo get
    }
}

class Dipendente extends Persona{
    nome:string;
    cognome:string;
    nomeazienda:string;
    anno:number;
    constructor(nome:string,cognome:string,anno:number,nomeazienda:string){
        super(nome,cognome,anno);
        this.nome = nome,
        this.cognome = cognome;
        this.anno = anno;
        this.nomeazienda = nomeazienda
    }
}