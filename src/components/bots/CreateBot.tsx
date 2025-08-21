import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  Bot, 
  Upload, 
  Palette,
  Check,
  Globe,
  FileText,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Step = "general" | "knowledge" | "widget";

const CreateBot = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>("general");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tone: "friendly",
    language: "en",
    fallbackMessage: "",
    files: [] as File[],
    urls: "",
    theme: "modern",
    position: "bottom-right",
    welcomeMessage: "",
    proactiveMessage: "",
    enableCSAT: true
  });

  const steps = [
    { id: "general", title: "General", icon: Settings },
    { id: "knowledge", title: "Knowledge", icon: FileText },
    { id: "widget", title: "Widget", icon: Palette }
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const handleNext = () => {
    const stepOrder: Step[] = ["general", "knowledge", "widget"];
    const nextIndex = stepOrder.indexOf(currentStep) + 1;
    if (nextIndex < stepOrder.length) {
      setCurrentStep(stepOrder[nextIndex]);
    }
  };

  const handlePrevious = () => {
    const stepOrder: Step[] = ["general", "knowledge", "widget"];
    const prevIndex = stepOrder.indexOf(currentStep) - 1;
    if (prevIndex >= 0) {
      setCurrentStep(stepOrder[prevIndex]);
    }
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...Array.from(files)]
      }));
    }
  };

  const handleFinish = () => {
    // Mock bot creation
    const newBotId = "new-bot-" + Date.now();
    navigate(`/app/bots/${newBotId}/playground`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/app/bots")}
            className="p-2"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Create New Bot</h1>
            <p className="text-muted-foreground">
              Set up your AI chatbot in 3 simple steps
            </p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                index <= currentStepIndex
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-muted-foreground text-muted-foreground"
              }`}>
                {index < currentStepIndex ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </div>
              <span className={`ml-2 text-sm font-medium ${
                index <= currentStepIndex ? "text-foreground" : "text-muted-foreground"
              }`}>
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className={`w-20 h-0.5 mx-4 ${
                  index < currentStepIndex ? "bg-primary" : "bg-muted"
                }`} />
              )}
            </div>
          ))}
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step Content */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {(() => {
              const StepIcon = steps.find(s => s.id === currentStep)?.icon;
              return StepIcon ? <StepIcon className="w-5 h-5" /> : null;
            })()}
            <span>Step {currentStepIndex + 1}: {steps[currentStepIndex].title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* General Step */}
          {currentStep === "general" && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Bot Name *</Label>
                <Input
                  id="name"
                  placeholder="e.g., Customer Support Bot"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Briefly describe what this bot will help with..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tone">Personality Tone</Label>
                  <Select value={formData.tone} onValueChange={(value) => setFormData(prev => ({ ...prev, tone: value }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="friendly">Friendly & Conversational</SelectItem>
                      <SelectItem value="professional">Professional & Formal</SelectItem>
                      <SelectItem value="casual">Casual & Relaxed</SelectItem>
                      <SelectItem value="helpful">Helpful & Supportive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="language">Primary Language</Label>
                  <Select value={formData.language} onValueChange={(value) => setFormData(prev => ({ ...prev, language: value }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="pt">Portuguese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="fallback">Fallback Message</Label>
                <Textarea
                  id="fallback"
                  placeholder="What should the bot say when it doesn't know the answer?"
                  value={formData.fallbackMessage}
                  onChange={(e) => setFormData(prev => ({ ...prev, fallbackMessage: e.target.value }))}
                  className="mt-1"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  This message appears when the bot can't find a relevant answer
                </p>
              </div>
            </div>
          )}

          {/* Knowledge Step */}
          {currentStep === "knowledge" && (
            <div className="space-y-6">
              <div>
                <Label>Upload Documents</Label>
                <div className="mt-2 border-2 border-dashed border-muted rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Upload your knowledge base</h3>
                  <p className="text-muted-foreground mb-4">
                    Drag & drop files or click to browse. Supports PDF, DOCX, TXT, CSV
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.docx,.txt,.csv"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className="hidden"
                    id="file-upload"
                  />
                  <Label htmlFor="file-upload">
                    <Button variant="outline" className="cursor-pointer">
                      Choose Files
                    </Button>
                  </Label>
                </div>
                
                {formData.files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <Label>Uploaded Files:</Label>
                    {formData.files.map((file, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-muted rounded-lg">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{file.name}</span>
                        <Badge variant="outline" className="ml-auto">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </Badge>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="urls">Website URLs (Optional)</Label>
                <Textarea
                  id="urls"
                  placeholder={`Enter URLs to crawl (one per line)\nhttps://yoursite.com/help\nhttps://yoursite.com/faq`}
                  value={formData.urls}
                  onChange={(e) => setFormData(prev => ({ ...prev, urls: e.target.value }))}
                  className="mt-1"
                  rows={4}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  We'll automatically extract content from these pages
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Storage Usage</span>
                </div>
                <Progress value={23} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  2.3 MB of 100 MB used
                </p>
              </div>
            </div>
          )}

          {/* Widget Step */}
          {currentStep === "widget" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label>Widget Theme</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {["modern", "classic", "minimal", "colorful"].map((theme) => (
                      <button
                        key={theme}
                        onClick={() => setFormData(prev => ({ ...prev, theme }))}
                        className={`p-3 border rounded-lg text-left ${
                          formData.theme === theme ? "border-primary bg-primary/5" : "border-muted"
                        }`}
                      >
                        <div className="w-full h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded mb-2" />
                        <span className="text-sm font-medium capitalize">{theme}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Position</Label>
                  <Select value={formData.position} onValueChange={(value) => setFormData(prev => ({ ...prev, position: value }))}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bottom-right">Bottom Right</SelectItem>
                      <SelectItem value="bottom-left">Bottom Left</SelectItem>
                      <SelectItem value="bottom-center">Bottom Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="welcome">Welcome Message</Label>
                <Input
                  id="welcome"
                  placeholder="Hi! How can I help you today?"
                  value={formData.welcomeMessage}
                  onChange={(e) => setFormData(prev => ({ ...prev, welcomeMessage: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="proactive">Proactive Message (Optional)</Label>
                <Input
                  id="proactive"
                  placeholder="Need help finding something?"
                  value={formData.proactiveMessage}
                  onChange={(e) => setFormData(prev => ({ ...prev, proactiveMessage: e.target.value }))}
                  className="mt-1"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Shown after 30 seconds of inactivity
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Embed Code Preview</h3>
                <div className="bg-background p-3 rounded border font-mono text-sm">
                  {`<script src="https://chatbotpro.com/widget.js" data-bot-id="new-bot"></script>`}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Copy this code to your website or use our WordPress plugin
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === "general"}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        {currentStep === "widget" ? (
          <Button onClick={handleFinish} className="bg-gradient-primary">
            <Bot className="w-4 h-4 mr-2" />
            Create Bot
          </Button>
        ) : (
          <Button onClick={handleNext}>
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateBot;