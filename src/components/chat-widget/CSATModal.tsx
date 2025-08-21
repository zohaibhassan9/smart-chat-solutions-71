import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, ThumbsUp, ThumbsDown, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface CSATModalProps {
  open: boolean;
  onClose: () => void;
}

const CSATModal = ({ open, onClose }: CSATModalProps) => {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    setIsSubmitted(true);
    toast({
      title: "Thank You!",
      description: "Your feedback helps us improve our service.",
    });

    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setRating(0);
      setFeedback("");
    }, 2000);
  };

  const handleQuickRating = (positive: boolean) => {
    setRating(positive ? 5 : 1);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Rate Your Experience</DialogTitle>
          <DialogDescription>
            <strong>Before:</strong> Companies don't know what's working or broken.
            <br />
            <strong>After:</strong> Your feedback directly improves the experience for everyone.
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <div className="space-y-6">
            {/* Star Rating */}
            <div className="text-center space-y-3">
              <Label className="text-base">How was your chat experience?</Label>
              <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="transition-colors hover:scale-110"
                  >
                    <Star
                      className={cn(
                        "h-8 w-8",
                        star <= rating 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "text-muted-foreground"
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Thumbs */}
            <div className="flex space-x-4 justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuickRating(true)}
                className={cn(rating >= 4 && "bg-green-50 border-green-200")}
              >
                <ThumbsUp className="h-4 w-4 mr-2" />
                Helpful
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuickRating(false)}
                className={cn(rating <= 2 && "bg-red-50 border-red-200")}
              >
                <ThumbsDown className="h-4 w-4 mr-2" />
                Not Helpful
              </Button>
            </div>

            {/* Feedback */}
            <div>
              <Label htmlFor="feedback">Additional feedback (optional)</Label>
              <Textarea
                id="feedback"
                placeholder="What could we do better?"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={3}
              />
            </div>
            
            <div className="flex space-x-3">
              <Button 
                onClick={handleSubmit} 
                className="flex-1" 
                variant="cta"
                disabled={rating === 0}
              >
                <Send className="h-4 w-4 mr-2" />
                Submit Feedback
              </Button>
              <Button onClick={onClose} variant="outline">
                Skip
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4 py-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Star className="h-6 w-6 text-primary fill-current" />
            </div>
            <div>
              <h3 className="font-semibold">Thank You!</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your feedback helps us serve you better.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CSATModal;