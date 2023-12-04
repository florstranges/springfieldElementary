import { Course } from "../../courses/models/courses.models";
import { Student } from "../../students/models/students.model";

export interface Inscription {
    id: number;
    courseId: number;
    studentId: number;
    student?: Student;
    course?: Course;
}

export interface CreateInscriptionPayload{
    courseId: number | null;
    studentId: number | null;
}
