import type { Message } from "../../types/typings";
import { getAcknowledgment } from "../../utils/getAcknowledgment";

export default function Contribution({
  contribution,
}: {
  contribution: Message["contribution"];
}) {
  if (contribution) {
    const AuthorContainer = contribution.link ? "a" : "span";
    return (
      <small className="absolute block w-full mt-2 text-gray-900 text-base dark:text-gray-50 opacity-40">
        ({getAcknowledgment()},{" "}
        <AuthorContainer
          {...(contribution.link && { href: contribution.link })}
        >
          {contribution.author}
        </AuthorContainer>
        )
      </small>
    );
  }

  return null;
}
