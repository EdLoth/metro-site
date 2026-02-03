import { BarragemRioColonia } from "./barragem";
import {
  CentroConvencoesProject,
  EdificioGaragemProject,
  ArquivoPublicoSalvador,
  CaseVitoriaConquista,
  SedePrefeituraMunicipalLEM,
} from "./edificacao";
import {
  EscolaDivaPortelaProject,
  EscolaVistaAlegre,
  EscolaCaic,
  EscolaDrDemosthenes,
  EscolaJoaoSerafim,
  EscolaManoelChristo,
} from "./escolas";
import { MinhaCasaMinhaVidaProjeto } from "./habitacao";
import {
  CleristonAndradeProject,
  HospitalItaberabaProject,
  HospitalItabunaProject,
  ICOMProject,
} from "./hospitais";
import { VLTProject } from "./mobilidade_urbana";
import {
  ViaBarradaoProject,
  EstradasVicinais,
  ManutençãoCentroHistorico,
  ContencaoEncostas,
} from "./obras-estruturantes";
import { ProjetoEngenharia } from "./types";
import { PracasMaceioProjeto } from "./urbanizacao";

export const ManutençãoEsgotamentoSanitario: ProjetoEngenharia = {
  id: "prj_manutencao_esgotamento_sanitario",
  categoria: "MANUTENCAO_ESGOTAMENTO",
  titulo: "Manutenção de esgotamento sanitário",
  descricao:
    "Manutenção de esgotamento sanitário em diversas localidades de Salvador",
  descricaoCompleta:
    "Manutenção de esgotamento sanitário em diversas localidades de Salvador",
  status: "Em andamento",
  relevancia: 1,
  cliente: "EMBASA",
  localizacao: "Salvador",
  periodo: {
    duracao: "5 Anos",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81w6opxqj08lokuddtof4",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81w9bpplc07lodtozbd7v",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81wcqpplj07lol03f4yu8",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81wfepxqu08lo4q3r9ki6",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81wfepxqu08lo4q3r9ki6",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81whkpplq07loaehdrnap",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81wkjpplx07lo671r1fag",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81wonppm407lokpa1882d",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81wqypxrb08lodshgqozb",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81wu4ppmb07lo9blxyywc",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81wx1pxri08loc4lgl2eq",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81wzypxrp08loswylu7ju",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81x2appmi07lon1x2dhw0",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81x53ppmq07loa0uca5d4",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81x7cpxrw08lo0cqnks1y",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81xa1pxs308lo1avzxbc0",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81xcdppmx07locqn3ovow",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81xfbpxsa08lo6yincg1l",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81xiappn407lo4zwkeg1r",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81xl9pxsh08lo2twtaq2y",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81xo6ppnb07lofxm04qa6",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81xrfpxso08loih030u47",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81xuipxsv08lovhcwa1g5",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81xxdppnm07lo5t00fv2z",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81y0hpxt208lomyoec5dp",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81y3fpxt908lo9txgipox",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81y6mpxti08loz8dycbgq",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81y8tppo107lo613itute",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81ybpppo807lonrfnibqm",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81ydyppof07lon704uhji",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81ygrpxtu08lotuefw70b",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81yjvpxu108lo9kfn7lmv",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81ym3ppom07lou3fchtby",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81yp6ppot07low5yx5mk0",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkz81ysppxub08looaobmoaj",
  ],
  especificacoes: {
    //   "Área Construída": "23.262,09m²",
    //   "N° de UTIs": "30 leitos de UTI",
    //   "N° de Enfermaria": "150 leitos de Enfermarias",
    //   "Parto Normal": "3 leitos",
    //   "Salas de Cirurgia": "5 + 1 de Hemodinâmica",
    //   "Salas de Imagenologia": "2 Tomógrafos, 2 Raios X, 1 Ressonância",
    //   Quimioterapia: "12 poltronas",
    //   Radiologia: "Acelerador Linear e Braquiteriapia",
  },
};

export const allProjects: ProjetoEngenharia[] = [
  //Hospitais
  ICOMProject,
  CleristonAndradeProject,
  HospitalItabunaProject,
  HospitalItaberabaProject,

  //Escolas
  EscolaDivaPortelaProject,
  EscolaVistaAlegre,
  EscolaCaic,
  EscolaDrDemosthenes,
  EscolaJoaoSerafim,
  EscolaManoelChristo,

  //Obras Estruturantes
  ViaBarradaoProject,
  EstradasVicinais,
  ManutençãoCentroHistorico,
  ContencaoEncostas,

  //Mobilidade Urbana
  VLTProject,

  //Edificação
  CentroConvencoesProject,
  EdificioGaragemProject,
  ArquivoPublicoSalvador,
  CaseVitoriaConquista,
  SedePrefeituraMunicipalLEM,

  //Barragem
  BarragemRioColonia,

  //Habitação
  MinhaCasaMinhaVidaProjeto,

  //Urbanização
  PracasMaceioProjeto,

  //Manutenção
  ManutençãoEsgotamentoSanitario,
];

export default allProjects;
