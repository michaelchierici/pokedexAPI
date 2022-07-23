import { Request, Response } from "express";
import { PokemonService } from "../services/PokemonService";

export class PokemonController {
  static create(req: Request, res: Response) {
    const { name, ammount, type, price, img } = req.body;
    const response = PokemonService.create(name, ammount, type, price, img);
    res.status(200).json(response);
  }

  static async findAll(req: Request, res: Response) {
    const response = await PokemonService.findAll();
    res.status(200).json(response);
  }

  static async findById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await PokemonService.findOne(id);
    res.status(200).json(response);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
    const response = await PokemonService.update(id, name);
    res.status(200).json(response);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    await PokemonService.delete(id);
    res.status(200).json({});
  }
}
