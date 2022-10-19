const express = require("express");

const router = express.Router();


const learner_controller = require("../Controller/LearnerController")

router.post("/add-learner",learner_controller.addLearner)

router.get("/",learner_controller.getAllLearner)

router.post("/apply-filter",learner_controller.getLearnerByFilter)

router.patch("/update",learner_controller.UpdateLearnerByFeilds)

router.delete("/delete",learner_controller.DeleteLearnerByFeilds)


const course_controller = require("../Controller/CourseController")

router.post("/add-course",course_controller.addCourse)

router.get("/",course_controller.getAllCourse)

router.post("/apply-filter",course_controller.getCourseByFilter)

router.patch("/update",course_controller.UpdateCourseByFeilds)

router.delete("/delete",course_controller.DeleteCourseByFeilds)








