"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, ChevronRight, Clock, DollarSign, Users } from "lucide-react"

export default function BecomeMentor() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Become a Mentor</h1>
          <p className="text-gray-600">Share your expertise and help others grow in their careers</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= i ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > i ? <CheckCircle2 className="h-6 w-6" /> : i}
              </div>
              <span className="text-sm mt-2">{i === 1 ? "Basic Info" : i === 2 ? "Expertise" : "Availability"}</span>
            </div>
          ))}
        </div>

        <Card>
          {step === 1 && (
            <>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Tell us about yourself and your professional background</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input id="linkedin" placeholder="https://linkedin.com/in/johndoe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentRole">Current Role</Label>
                  <Input id="currentRole" placeholder="Senior Software Engineer" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input id="company" placeholder="Tech Company Inc." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Professional Experience</Label>
                  <Select>
                    <SelectTrigger id="experience">
                      <SelectValue placeholder="Select years of experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="4-6">4-6 years</SelectItem>
                      <SelectItem value="7-10">7-10 years</SelectItem>
                      <SelectItem value="11-15">11-15 years</SelectItem>
                      <SelectItem value="15+">15+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={nextStep}>
                  Next Step <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </>
          )}

          {step === 2 && (
            <>
              <CardHeader>
                <CardTitle>Your Expertise</CardTitle>
                <CardDescription>Share your skills and areas where you can provide mentorship</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="expertise">Areas of Expertise</Label>
                  <Select>
                    <SelectTrigger id="expertise">
                      <SelectValue placeholder="Select primary area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software-development">Software Development</SelectItem>
                      <SelectItem value="product-management">Product Management</SelectItem>
                      <SelectItem value="data-science">Data Science & Analytics</SelectItem>
                      <SelectItem value="design">UX/UI Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="business">Business Strategy</SelectItem>
                      <SelectItem value="leadership">Leadership & Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Specific Skills (comma separated)</Label>
                  <Input id="skills" placeholder="React, Node.js, System Design, Team Leadership" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Share your professional journey and what makes you a great mentor..."
                    className="min-h-[150px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mentorshipStyle">Mentorship Style</Label>
                  <Select>
                    <SelectTrigger id="mentorshipStyle">
                      <SelectValue placeholder="Select your mentorship style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hands-on">Hands-on & Practical</SelectItem>
                      <SelectItem value="strategic">Strategic & Big Picture</SelectItem>
                      <SelectItem value="coaching">Coaching & Questioning</SelectItem>
                      <SelectItem value="advisory">Advisory & Consultative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  Back
                </Button>
                <Button onClick={nextStep}>
                  Next Step <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </>
          )}

          {step === 3 && (
            <>
              <CardHeader>
                <CardTitle>Availability & Preferences</CardTitle>
                <CardDescription>Let us know your availability and mentorship preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="hoursPerWeek">Hours Available Per Week</Label>
                  <Select>
                    <SelectTrigger id="hoursPerWeek">
                      <SelectValue placeholder="Select hours" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 hours</SelectItem>
                      <SelectItem value="3-5">3-5 hours</SelectItem>
                      <SelectItem value="6-10">6-10 hours</SelectItem>
                      <SelectItem value="10+">10+ hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sessionLength">Preferred Session Length</Label>
                  <Select>
                    <SelectTrigger id="sessionLength">
                      <SelectValue placeholder="Select length" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="90">90 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rate">Hourly Rate (USD)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input id="rate" className="pl-10" placeholder="75" />
                  </div>
                  <p className="text-sm text-gray-500">Set your hourly rate for mentorship sessions</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="menteeCount">Number of Mentees</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input id="menteeCount" className="pl-10" placeholder="3" />
                  </div>
                  <p className="text-sm text-gray-500">Maximum number of mentees you can support at once</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Typical Availability</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input id="availability" className="pl-10" placeholder="Weekday evenings, Weekend mornings" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  Back
                </Button>
                <Button>Submit Application</Button>
              </CardFooter>
            </>
          )}
        </Card>

        {/* Benefits */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Why Become a Mentor?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Give Back</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Share your knowledge and experience to help others avoid common pitfalls and accelerate their growth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Earn Income</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get compensated for your time and expertise while making a meaningful impact on others' careers.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Build Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Expand your professional network and connect with motivated individuals in your industry.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

