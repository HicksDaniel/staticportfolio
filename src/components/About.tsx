export default function About() {
  return (
    <div className="mt-3 flex h-full flex-col justify-between text-sm">
      <div className="flex flex-col justify-between font-medium">
        <h2 className="hidden-header">About me</h2>
        <p>
          Hi, Daniel Hicks, a front-end software developer from Indianapolis.
        </p>
        <div className="mt-1 text-xs">
          <div className="my-1 text-sm font-bold">My primary tools:</div>
          <ul className="p-1 font-light">
            <p className="font-bold">Languages:</p>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
          <ul className="p-1 font-light">
            <p className="font-bold">Frameworks:</p>
            <li>React</li>
            <li>Next.js</li>
          </ul>
          <ul className="p-1 font-light">
            <p className="font-bold">Styles:</p>
            <li>CSS</li>
            <li>Tailwind v4</li>
            <li>PrimeFlex</li>
          </ul>
          <ul className="p-1 font-light">
            <p className="font-bold">Libraries:</p>
            <li>PrimeReact</li>
            <li>Three.js</li>
            <li>Material-UI</li>
          </ul>
          <ul className="p-1 font-light">
            <p className="font-bold">Tools:</p>
            <li>Nodejs</li>
            <li>Vite</li>
          </ul>
        </div>

        <p className="mt-4 text-sm">
          Beyond coding, I am passionate about design, 3d modeling, computer
          hardware, and traveling. I am always looking for new things to learn
          and explore.
        </p>
      </div>
    </div>
  );
}
