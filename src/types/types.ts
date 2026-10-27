
export interface Cadastro {
  nome: string;
  email: string;
  senha: string;
}


export interface Usuario extends Cadastro {
  id: string;
  pontos: number;
  gotas: number;
  missoes: number;
  co2: number;
  missoesConcluidas: number[];
}


export interface Login {
  email: string;
  senha: string;
}