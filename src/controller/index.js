import express from 'express';
import upload from '../utils/middlewares/file.js';
import * as user from '../domain/services/user-service.js';
import * as competition from '../domain/services/competicion-service.js';
import * as bid from '../domain/services/bid-service.js';
import * as player from './../domain/services/player-service.js';
import isAdmin from '../utils/middlewares/admin-auth-middleware.js';
import isUser from '../utils/middlewares/user-auth-middleware.js';
import refreshToken from '../utils/helpers/refreshToken.js';

const router = express.Router();
router.post('/users/:id/refresh-token', refreshToken);
router.post('/users/register', upload.single('image'), user.Create);
router.post('/users/login', user.Login);
router.post('/users/logout', user.Logout);
router.get('/users', [isAdmin], user.GetAll);
router.delete('/users/:id', user.Delete);
router.patch('/users/:id', user.Update);
router.get('/users/:id', user.GetOne);
router.put('/users/:id', user.UpdateUsersPlayers);
router.put('/users/lineup/:id', user.UpdateLineup);
router.put('/users/points/:id', [isAdmin], user.UpdateUsersPoints);
router.patch('/users/money/:id', user.UpdatePlayersMoney);
router.put('/users/competition/:id', user.UpdateCompetition);
router.put('/users/inicialplayers/:id', user.InicialPlayers);
router.patch('/users/:id/invited', user.JoinGroup);
router.put('/users/role/:id', user.UpdateRole);
router.put('/users/sell/:id', user.SellPlayer);
router.put('/users/changeLineUp/:id', user.changePlayerLineup);
router.post('/users/generateinvite/:id', user.CreateInvitationToGroup);
router.get('/users/benchPlayers/:id', user.benchPlayer);
router.patch('/users/retrive/:gmail', user.RetrivePassword);
router.get('/bids', bid.GetAll);
router.post('/bids', bid.Create);
router.delete('/bids', bid.DeleteAll);
router.delete('/bids/:id', bid.Delete);
router.post('/players/:id/bids', player.AddBid);
router.post('/players', player.Create);
router.get('/players', player.GetAll);
router.get('/players/:id', player.GetOne);
router.delete('/players/:id', player.Delete);
router.patch('/players/:id', player.Update);
router.put('/players/points', player.ChangePoints);
router.post('/competitions', competition.Create);
router.get('/competitions', competition.GetAll);
router.get('/competitions/:id', competition.GetOne);
router.get('/competitions/name/:name', competition.GetName);
router.patch('/competitions/:id', competition.Update);
router.put('/competitions/:id', competition.UpdateUsers);
router.patch('/competitions/:id/market', [isAdmin], competition.UpdateMarket);
router.delete('/competitions/:id', competition.Delete);
router.get('/google', (req, res) => res.send(req.user));

export default router;
