import { Agent } from "./models/agentAuth.model.js";
import { Event } from "./models/event.model.js";
import { v4 } from "uuid";

class Controller {
  async getEvents(req, res, next) {
    const agentId = req.params.id;
    const data = await Event.find({ agentId: agentId });
    return res.status(200).json(
      data
    );
  }

  async createEvent(req, res, next) {
    const newEvent = new Event({
      ...req.body,
    });

    newEvent.save((err, data) => {
      return res.status(201).json(data);
    })
  }

  async updateEvent(req, res, next) {
    try {
      await Event.findOneAndUpdate(
        { _id: req.body._id },
        {
          $set: { ...req.body }
        },
        { new: true },
        (err, data) => {
          return res.status(201).json(data);
        }
      )
    } catch (e) {
      console.log(e);
    }
  }

  async deleteEvent(req, res, next) {
    const id = req.body._id;
    Event.deleteOne({ _id: id }).exec((err, data) => {
      return res.status(201).json(data);
    })
  }
}

export default new Controller();