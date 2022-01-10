import { Agent } from "./models/agentAuth.model.js";
import { Event } from "./models/event.model.js";
import { v4 } from "uuid";

class Controller {
  async getEvents(req, res, next) {
    const agentId = req.query.agentId;
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
      if (err) {
        return res.status(400).json(err.message);
      }
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
          if (err) {
            return res.status(400).json(err.message);
          }
          return res.status(201).json(data);
        }
      ).clone();
    } catch (e) {
      console.log(e);
    }
  }

  async deleteEvent(req, res, next) {
    const id = req.body._id;
    Event.deleteOne({ _id: id }).exec((err, data) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      return res.status(201).json(data);
    })
  }

  async login(req, res, next) {
    const { username, password } = req.body;
    const candidate = await Agent.findOne({ username: username, password: password });
    if (!candidate) {
      res.status(404).json("Неверный логин/пароль");
    } else {
      return res.status(200).json({
        ...candidate._doc, token: v4()
      });
    }
  }
}

export default new Controller();