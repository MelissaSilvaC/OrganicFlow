"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const RoleController_1 = require("./controllers/RoleController");
const UserController_1 = require("./controllers/UserController");
const SessionController_1 = require("./controllers/SessionController");
const authMiddleware_1 = require("./middlewares/authMiddleware");
const proprioPut_1 = require("./middlewares/proprioPut");
const permissions_1 = require("./middlewares/permissions");
const roles_1 = require("./common/utils/roles");
const DenunciaController_1 = require("./controllers/DenunciaController");
const LinhaController_1 = require("./controllers/LinhaController");
const GerenteController_1 = require("./controllers/GerenteController");
const FiscalController_1 = require("./controllers/FiscalController");
const RelatorioController1_1 = require("./controllers/RelatorioController1");
const RelatorioController2_1 = require("./controllers/RelatorioController2");
const RelatorioController3_1 = require("./controllers/RelatorioController3");
const RelatorioController4_1 = require("./controllers/RelatorioController4");
const RelatorioController5_1 = require("./controllers/RelatorioController5");
const Feed_1 = require("./controllers/Feed");
const ProdutoController_1 = require("./controllers/ProdutoController");
const router = (0, express_1.Router)();
exports.router = router;
const userController = new UserController_1.UserController();
const sessionController = new SessionController_1.SessionController();
const roleController = new RoleController_1.RoleController();
const gerenteController = new GerenteController_1.GerenteController();
const fiscalController = new FiscalController_1.FiscalController();
const denunciaController = new DenunciaController_1.DenunciaController();
const linhaController = new LinhaController_1.LinhaController();
const relatorio1Controller = new RelatorioController1_1.Relatorio1Controller();
const relatorio2Controller = new RelatorioController2_1.Relatorio2Controller();
const relatorio3Controller = new RelatorioController3_1.Relatorio3Controller();
const relatorio4Controller = new RelatorioController4_1.Relatorio4Controller();
const relatorio5Controller = new RelatorioController5_1.Relatorio5Controller();
const feedController = new Feed_1.FeedController();
const produtoController = new ProdutoController_1.ProdutoController();
const uploadConfig_1 = __importDefault(require("./uploadConfig"));
// const userRole=new UserRole();
router.post("/user", userController.criar);
router.post("/login", sessionController.login);
router.get("/auth", authMiddleware_1.authMiddleware);
// router.get("/user",authMiddleware, userController.consultar);
// router.post("/acesso",authMiddleware,userAccess.criar)
// router.put("/user/:id",authMiddleware,is([RolesPrivate.admin]),userController.atualizar);
// router.delete("/user/:id",userController.deletar);
// router.get("/user/:id", authMiddleware,can([PermissionsPrivate.usuarioPesquisar]),userController.pesquisar);
//router.get("/user/:id", authMiddleware,is([RolesPrivate.admin]),userController.pesquisar)
// router.get("/role",roleController.consultar);
//cliente
router.get("/linha/:id", linhaController.pesquisar);
router.get("/empresa/:id", gerenteController.pesquisarEmpresa);
router.get("/empresa", gerenteController.consultarEmpresa);
router.get("/fiscal/:id", fiscalController.consultarFiscal);
router.get("/produto/:id", produtoController.pesquisar);
router.get("/fiscal_empresa/:id", fiscalController.listarSeuFiscal);
//cliente cadastrado
router.post("/feed", authMiddleware_1.authMiddleware, feedController.criar);
router.post("/denuncia", authMiddleware_1.authMiddleware, denunciaController.criar);
//administrador
// router.get("/denuncia",authMiddleware,is([RolesPrivate.admin]),denunciaController.consultar)
router.get("/denuncia", denunciaController.consultar);
router.delete("/denuncia/:id", authMiddleware_1.authMiddleware, (0, permissions_1.is)([roles_1.RolesPrivate.admin]), denunciaController.deletar);
router.get("/gerente", gerenteController.listarGerente); //lista de gerente 
router.get("/gerentevalido", gerenteController.listarGerenteValido); //lista de gerente 
router.post("/gerente", authMiddleware_1.authMiddleware, gerenteController.permissaoGerente);
router.delete("/gerente", authMiddleware_1.authMiddleware, gerenteController.suspenderGerente);
router.get("/feed", feedController.consultar);
router.put("/ban/:id", userController.banir);
router.get("/ban", gerenteController.listarbanido); //lista de gerente 
//gerente
router.get("/user/:id", userController.pesquisar); //quando o gerente precisar pesquisar o usuario
router.post("/fiscal", authMiddleware_1.authMiddleware, fiscalController.permissaoFiscal);
router.put("/user/:id", authMiddleware_1.authMiddleware, uploadConfig_1.default.single('file'), userController.atualizar);
router.delete("/fiscal/:id", authMiddleware_1.authMiddleware, (0, permissions_1.is)([roles_1.RolesPrivate.gerente]), fiscalController.removerFiscal);
router.put("/user/:id", authMiddleware_1.authMiddleware, proprioPut_1.proprioput, userController.atualizar);
router.put("/produto/:id", authMiddleware_1.authMiddleware, uploadConfig_1.default.single('file'), produtoController.atualizar);
router.post("/produto", authMiddleware_1.authMiddleware, uploadConfig_1.default.single('file'), produtoController.criar);
router.delete("/produto/:id", produtoController.deletar);
//fiscal
router.post("/linha", linhaController.criar);
// router.get("/linha",linhaController.consultar)
router.put("/linha/:id", authMiddleware_1.authMiddleware, linhaController.gerarQrcode);
router.post("/relatorio1", authMiddleware_1.authMiddleware, relatorio1Controller.criar);
router.post("/relatorio2", authMiddleware_1.authMiddleware, relatorio2Controller.criar);
router.post("/relatorio3", authMiddleware_1.authMiddleware, relatorio3Controller.criar);
router.post("/relatorio4", authMiddleware_1.authMiddleware, relatorio4Controller.criar);
router.post("/relatorio5", authMiddleware_1.authMiddleware, relatorio5Controller.criar);
router.put("/relatorio1/:id", authMiddleware_1.authMiddleware, (0, permissions_1.is)([roles_1.RolesPrivate.fiscal]), relatorio1Controller.atualizar);
router.put("/relatorio2/:id", authMiddleware_1.authMiddleware, (0, permissions_1.is)([roles_1.RolesPrivate.fiscal]), relatorio2Controller.atualizar);
router.put("/relatorio3/:id", authMiddleware_1.authMiddleware, (0, permissions_1.is)([roles_1.RolesPrivate.fiscal]), relatorio3Controller.atualizar);
router.put("/relatorio4/:id", authMiddleware_1.authMiddleware, (0, permissions_1.is)([roles_1.RolesPrivate.fiscal]), relatorio4Controller.atualizar);
router.put("/relatorio5/:id", authMiddleware_1.authMiddleware, (0, permissions_1.is)([roles_1.RolesPrivate.fiscal]), relatorio5Controller.atualizar);
//# sourceMappingURL=routes.js.map