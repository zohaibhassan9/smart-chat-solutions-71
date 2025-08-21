import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { User, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HandoverModalProps {
  open: boolean;
  onClose: () => void;
}

const HandoverModal = ({ open, onClose }: HandoverModalProps) => {
  const [reason, setReason] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    setIsSubmitted(true);
    toast({
      title: "Request Sent",
      description: "An agent will be with you shortly.",
    });
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setReason("");
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <User className="h-5 w-5 text-primary" />
            <span>Request Human Agent</span>
          </DialogTitle>
          <DialogDescription>
            <strong>Before:</strong> You're stuck with an AI that can't solve your specific problem.
            <br />
            <strong>After:</strong> Connect with a human expert who understands your unique situation.
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor="reason">What can our agent help you with? (Optional)</Label>
              <Textarea
                id="reason"
                placeholder="Describe your issue to help our agent prepare..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
              />
            </div>
            
            <div className="flex space-x-3">
              <Button onClick={handleSubmit} className="flex-1" variant="cta">
                Request Agent Now
              </Button>
              <Button onClick={onClose} variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4 py-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Agent Request Sent!</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Estimated wait time: 2-5 minutes
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default HandoverModal;