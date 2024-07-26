import { PortableTextComponents } from "@portabletext/react";

import { Code } from "./code";
import { LinkableHeader } from "./linkable-header";
import { SchnauzerList } from "./schnauzer-list";
import { hasSpeechApi, SpeechSynthesis } from "./speech-synthesis";
import ImageComponent from "./image";

type Props = {
  params: { slug: string };
};

const StyledParagraph: React.FC = ({ children }: any) => {
  return <p className="my-2 text-base leading-relaxed">{children}</p>;
};

const StyledBulletList: React.FC = ({ children }: any) => {
  return <ul className="list-disc list-inside my-2">{children}</ul>;
};

export const ptComponents: PortableTextComponents = {
  types: {
    code: Code,
    image: ImageComponent,
  },

  block: {
    h1: LinkableHeader,
    h2: LinkableHeader,
    h3: LinkableHeader,
    h4: LinkableHeader,
    normal: StyledParagraph,
  },

  list: {
    bullet: StyledBulletList,
    schnauzer: SchnauzerList,
  },

  marks: {
    // link: Link,
    speech: hasSpeechApi ? SpeechSynthesis : undefined,
  },
};
