import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface IssueReportModalProps {
  open: boolean;
  onClose: () => void;
}

const IssueReportModal = ({ open, onClose }: IssueReportModalProps) => {
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!issueType || !description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Issue Reported",
      description: "Thank you! We'll investigate this right away.",
    });

    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setIssueType("");
      setDescription("");
      setEmail("");
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <span>Report an Issue</span>
          </DialogTitle>
          <DialogDescription>
            <strong>Before:</strong> Problems go unnoticed and unfixed, frustrating users.
            <br />
            <strong>After:</strong> Quick reporting leads to fast fixes and better experiences for everyone.
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor="issue-type">Issue Type *</Label>
              <Select value={issueType} onValueChange={setIssueType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select issue type..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bug">Bug/Error</SelectItem>
                  <SelectItem value="slow">Slow Performance</SelectItem>
                  <SelectItem value="incorrect">Incorrect Response</SelectItem>
                  <SelectItem value="ui">Interface Problem</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="What happened? What did you expect to happen?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="email">Email (for updates)</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="flex space-x-3">
              <Button onClick={handleSubmit} className="flex-1" variant="destructive">
                Report Issue
              </Button>
              <Button onClick={onClose} variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4 py-4">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold">Issue Reported Successfully!</h3>
              <p className="text-sm text-muted-foreground mt-1">
                We'll investigate and get back to you soon.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default IssueReportModal;