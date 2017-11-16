import React from "react"
import { storiesOf } from "@storybook/react"
import Text from "../src/Text"

export default storiesOf("Text", module)
  .add("Basic", () => (
    <div>
      <Text hero>Hero</Text>
      <Text headline>Headline</Text>
      <Text title>Title</Text>
      <Text subtitle>Subtitle</Text>
      <Text>Text</Text>
      <Text small>Small</Text>
    </div>
  ))
  .add("Medium Article", () => (
    <div>
      <Text headline>How to write products</Text>
      <Text subtitle>A toolkit for when copy becomes design</Text>
      <Text>
        Writing is no easy thing. It’s something product designers do all the
        time — buttons, navigation, empty states, etc — but rarely with the same
        rigor or delight that we reserve for visuals and interaction patterns.
        When you come across the rare style guide for in-product copy, most
        focus on the finer details of writing: which abbreviations to use, how
        to type out dates, how to compose error messages and so on. This post is
        about the bigger picture that we often miss. It’s about the intersection
        between style and usability where copy becomes a facet of product
        design.
      </Text>
      <Text title>Copy as design</Text>
      <Text>
        <strong>Every product has a voice.</strong> As you read text, you
        “speak” the words to yourself and hear them like a spoken conversation.
        This voice is a tangible aspect of the product, just like its colors or
        animation. It should be designed. Many factors contribute to your
        perception of voice: typography, what you ate for breakfast, and the
        words themselves. In design, we often have the greatest control over the
        words.
      </Text>
      <Text title>Make it easy</Text>
      <Text>
        Some words are hard to read, or take a while to subvocalize (←like this
        one). Use them wisely. It’s not just five-dollar words to look out for,
        even “congratulations” takes a while to say.
      </Text>
      <Text>
        he shape of some words makes them recognizable — think “Follow,” “Save,”
        or “Cancel.” These words are well suited for functional UI because you
        can tell what they say faster than you can read them. These words should
        usually stand by themselves. “Follow” can be understood instantly, but
        “Follow Username” can’t.
      </Text>
      <Text>
        <strong>When it doubt, say it to yourself out loud.</strong> If it’s a
        mouthful, look for something that isn’t.
      </Text>
      <Text title>Keep it short</Text>
      <Text>
        Users aren’t there to enjoy your copy. Don’t waste their time.
      </Text>
    </div>
  ))
