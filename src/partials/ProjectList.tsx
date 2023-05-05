import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <div class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
                <div class="shrink-0">
                    <a href="https://aptoslabs.com">
                        <img class="m-2 p-2 h-36 w-36 bg-white rounded-full" src="/build/images/aptos_logo.svg" loading="lazy">
                    </a>
                </div>
                <div>
                    <div class="flex flex-col items-center gap-y-2 md:flex-row">
                        <a class="hover:text-cyan-400" href="https://aptoslabs.com">
                            <div class="text-3xl font-semibold">Aptos</div>
                        </a>
                    </div>
                    <p class="mt-3 text-xl text-gray-400">
                        Aptos is the safe and scalable layer 1 blockchain. Built with Move, the language developed for the Aptos network.
                    </p>

                    <div class="mt-3 flex flex-col items-center gap-y-2 md:flex-row">
                        <a class="px-6 py-2 rounded bg-slate-900 hover:bg-slate-700 text-slate-100" href="https://explorer.aptoslabs.com/validators?network=mainnet">
                            <span class="text-md font-semibold">Validators</span>
                        </a>
                    </div>
                </div>
             </div>
      <Project
        name="Project 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <a class="px-6 py-2 rounded bg-slate-900 hover:bg-slate-700 text-slate-100" href="https://explorer.aptoslabs.com/validators?network=mainnet">
              <span class="text-md font-semibold">Validators</span>
            </a>
          </>
        }
      />
      <Project
        name="Project 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>Blog</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
