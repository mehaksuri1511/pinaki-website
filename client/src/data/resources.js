import books from "../assets/images/books.png";
import notes from "../assets/images/notes.png";
import testpapers from "../assets/images/testpapers.png";

export const resources = [
  {
    id: 1,
    title: "Reference Books",
    description:
      "Access recommended books and study materials.",
    image: books,
    bg: "bg-gradient-to-br from-emerald-50 to-blue-50",
    route: "/resources/books",
  },
  {
    id: 2,
    title: "Module Test Papers",
    description:
      "Practice with mock tests.",
    image: testpapers,
    bg: "bg-gradient-to-br from-green-50 to-emerald-100",
    route: "/resources/tests",
  },
  {
    id: 3,
    title: "Notes",
    description:
      "Well-organized notes.",
    image: notes,
    bg: "bg-gradient-to-br from-sky-50 to-emerald-50",
    route: "/resources/notes",
  },
];