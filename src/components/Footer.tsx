import Github from "../icons/Github.svg";
import Linkedin from "../icons/LinkedIn.svg";
type Props = {
  fontColor: string;
};

export default function Footer({ fontColor }: Props) {
  return (
    <footer className="w-full flex justify-center items-center p-3 bg-transparent">
      <p style={{ color: fontColor }}>
        Made with ❤️ by{" "}
        <a href="https://www.linkedin.com/in/juli-humere/">Julio Humere</a>
      </p>
      <section className="absolute right-10 flex items-center w-24 justify-around">
        <a
          href="https://github.com/Julihumere"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Github} alt="Github" className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/juli-humere/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="Linkedin" className="w-6 h-6" />
        </a>
      </section>
    </footer>
  );
}
