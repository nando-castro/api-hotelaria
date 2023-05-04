import { Request, Response } from "express";
import * as customerService from "../services/customerService";

export async function getCustomers(req: Request, res: Response) {
  try {
    const customers = await customerService.getCustomers();
    res.status(200).send(customers);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
