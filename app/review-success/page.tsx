import { Title } from "@/src/ui/title";

export default function ReviewSuccess() {
  return (
      <div className="text-center">
        <Title tag="h1">Review Submitted Successfully!</Title>
        <p className="mt-4">Thank you for submitting your review. We appreciate your feedback!</p>
      </div>
  );
}
