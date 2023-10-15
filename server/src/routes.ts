import{Router}from "express";
import { RoleController } from "./controllers/RoleController";
import { UserRole } from "./controllers/UserRoleController";
import { UserController } from "./controllers/UserController";
import { SessionController } from "./controllers/SessionController";
import { authMiddleware } from "./middlewares/authMiddleware";
import { UserAccess } from "./controllers/UserAccess";
import { can, is } from "./middlewares/permissions";
import { PermissionsPrivate } from "./common/utils/permissions";
import { RolesPrivate } from "./common/utils/roles";
import { DenunciaController } from "./controllers/DenunciaController";
import { LinhaController } from "./controllers/LinhaController";
import { GerenteController } from "./controllers/GerenteController";
import { FiscalController } from "./controllers/FiscalController";
import { Relatorio1Controller } from "./controllers/RelatorioController1";
import { Relatorio2Controller } from "./controllers/RelatorioController2";
import { Relatorio3Controller } from "./controllers/RelatorioController3";
import { Relatorio4Controller } from "./controllers/RelatorioController4";
import { Relatorio5Controller } from "./controllers/RelatorioController5";
import { FeedController } from "./controllers/Feed";
import { ProdutoController } from "./controllers/ProdutoController";

const router=Router();

const userController=new UserController();
const sessionController=new SessionController();
const roleController=new RoleController();
const gerenteController =new GerenteController();
const fiscalController =new FiscalController();
const denunciaController =new DenunciaController();
const linhaController=new LinhaController();
const relatorio1Controller= new Relatorio1Controller();
const relatorio2Controller= new Relatorio2Controller();
const relatorio3Controller= new Relatorio3Controller();
const relatorio4Controller= new Relatorio4Controller();
const relatorio5Controller= new Relatorio5Controller();
const feedController = new FeedController();
const produtoController = new ProdutoController();
// const userRole=new UserRole();

router.post("/user",userController.criar);
router.post("/login",sessionController.login);

// router.get("/user",authMiddleware, userController.consultar);
// router.post("/acesso",authMiddleware,userAccess.criar)
// router.put("/user/:id",authMiddleware,is([RolesPrivate.admin]),userController.atualizar);
// router.delete("/user/:id",userController.deletar);
// router.get("/user/:id", authMiddleware,can([PermissionsPrivate.usuarioPesquisar]),userController.pesquisar);
//router.get("/user/:id", authMiddleware,is([RolesPrivate.admin]),userController.pesquisar)
// router.get("/role",roleController.consultar);

//cliente
router.post("/denuncia",authMiddleware,denunciaController.criar)
router.get("/linha/:id",linhaController.pesquisar)
router.get("/empresa/:id",gerenteController.pesquisarEmpresa)
router.get("/empresa",gerenteController.consultarEmpresa)
router.get("/fiscal/:id", fiscalController.consultarFiscal)
router.get("/produto/:id", produtoController.pesquisar)


//cliente cadastrado
router.post("/feed", feedController.criar)


//administrador
// router.get("/denuncia",authMiddleware,is([RolesPrivate.admin]),denunciaController.consultar)
router.get("/denuncia",denunciaController.consultar)
router.delete("/denuncia/:id",authMiddleware,is([RolesPrivate.admin]),denunciaController.deletar)
router.get("/gerente",authMiddleware,gerenteController.listarGerente); //lista de gerente 
router.post("/gerente",authMiddleware,gerenteController.permissaoGerente);
router.delete("/gerente",authMiddleware,gerenteController.suspenderGerente);
router.get("/feed" ,authMiddleware,feedController.consultar)

//gerente
router.get("/user",userController.pesquisar); //quando o gerente precisar pesquisar o usuario
router.post("/fiscal",authMiddleware,is([RolesPrivate.gerente]),fiscalController.permissaoFiscal);
router.get("/fiscal",authMiddleware,is([RolesPrivate.gerente]),fiscalController.listarSeuFiscal);
router.delete("/fiscal/:id",authMiddleware,is([RolesPrivate.gerente]),fiscalController.removerFiscal)
router.put("/user/:id",authMiddleware,userController.atualizar)
router.post("/produto", authMiddleware,is([RolesPrivate.gerente]),produtoController.criar)


//fiscal
router.post("/linha",authMiddleware,is([RolesPrivate.fiscal]),linhaController.criar)
// router.get("/linha",linhaController.consultar)
router.put("/linha/:id",authMiddleware,is([RolesPrivate.fiscal]),linhaController.gerarQrcode)
router.post("/relatorio1",authMiddleware,is([RolesPrivate.fiscal]),relatorio1Controller.criar)
router.post("/relatorio2",authMiddleware,is([RolesPrivate.fiscal]),relatorio2Controller.criar)
router.post("/relatorio3",authMiddleware,is([RolesPrivate.fiscal]),relatorio3Controller.criar)
router.post("/relatorio4",authMiddleware,is([RolesPrivate.fiscal]),relatorio4Controller.criar)
router.post("/relatorio5",authMiddleware,is([RolesPrivate.fiscal]),relatorio5Controller.criar)

router.put("/relatorio1/:id",authMiddleware,is([RolesPrivate.fiscal]),relatorio1Controller.atualizar)
router.put("/relatorio2/:id",authMiddleware,is([RolesPrivate.fiscal]),relatorio2Controller.atualizar)
router.put("/relatorio3/:id",authMiddleware,is([RolesPrivate.fiscal]),relatorio3Controller.atualizar)
router.put("/relatorio4/:id",authMiddleware,is([RolesPrivate.fiscal]),relatorio4Controller.atualizar)
router.put("/relatorio5/:id",authMiddleware,is([RolesPrivate.fiscal]),relatorio5Controller.atualizar)



export {router};