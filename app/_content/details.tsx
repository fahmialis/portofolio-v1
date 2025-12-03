import { InfoRow } from "../_sections/infoSection";

const detailContent: InfoRow[] = [
  {
    title: "seeking",
    content: `Frontend Developer, Fullstack Developer, Flutter Developer`,
  },
  {
    title: "most recent role",
    content: (
      <p>
        Fullstack Developer at{" "}
        <a href='https://bri.co.id/en/home' target='_blank'>
          <strong>PT Bank Rakyat Indonesia (BRI)</strong>
        </a>
      </p>
    ),
  },
  {
    title: "timezone",
    content: `Western Indonesia Time (GMT +7)`,
  },
  {
    title: "elsewhere",
    content: (
      <div>
        <a href='https://github.com/fahmialis' target='_blank'>
          Github
        </a>
        ,{" "}
        <a href='https://www.linkedin.com/in/fahmisinergia/' target='_blank'>
          LinkedIn
        </a>
      </div>
    ),
  },
  {
    title: "contact",
    content: `fjacobalis@gmail.com, +6281296903778`,
  },
];

export default detailContent;
