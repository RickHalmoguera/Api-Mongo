import express, {Request, Response} from "express";
import { deleteBooking, getBookings, getBookingsId, patchBooking, postBooking } from "../services/bookings";

export const bookingRouter = express.Router();

bookingRouter.get("/", async (req: Request, res: Response) => {
    const bookings = await getBookings()
    res.json(bookings);
});

bookingRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const booking = await getBookingsId(id)
    
    if (booking) {
        res.json(booking);
      } else {
        res.status(404).json({});
      }
});

bookingRouter.post("/", async (req: Request, res: Response) => {
    const booking = await postBooking(req.body)
    res.json( [{success: "booking create successfully"}]);
});


bookingRouter.patch("/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const data = await patchBooking(id, req.body)
    if (data) {
        res.json( [{success: "booking updated successfully"}]);
      } else {
        res.status(404).json({});
    }
});


bookingRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    await deleteBooking(id)
    
});