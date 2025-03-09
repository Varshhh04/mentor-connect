"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { BookOpen, Calendar, Clock, Filter, MessageSquare, Search, Star } from "lucide-react"

export default function FindMentor() {
  const [searchQuery, setSearchQuery] = useState("")
  const [industry, setIndustry] = useState("")
  const [experience, setExperience] = useState([5])
  const [showFilters, setShowFilters] = useState(false)

  // Mock data for mentors
  const mentors = [
    {
      id: 1,
      name: "Alex Johnson",
      title: "Senior Product Manager",
      company: "TechCorp",
      expertise: ["Product Strategy", "UX Design", "Agile Methodology"],
      experience: 8,
      rating: 4.9,
      reviews: 24,
      hourlyRate: 75,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Sarah Williams",
      title: "Engineering Director",
      company: "InnovateCo",
      expertise: ["Software Architecture", "Team Leadership", "Career Development"],
      experience: 12,
      rating: 4.8,
      reviews: 36,
      hourlyRate: 90,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Marketing Executive",
      company: "GrowthInc",
      expertise: ["Digital Marketing", "Brand Strategy", "Content Creation"],
      experience: 10,
      rating: 4.7,
      reviews: 19,
      hourlyRate: 65,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      name: "Priya Patel",
      title: "Data Science Lead",
      company: "AnalyticsPro",
      expertise: ["Machine Learning", "Data Visualization", "Python"],
      experience: 7,
      rating: 4.9,
      reviews: 28,
      hourlyRate: 85,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 5,
      name: "David Kim",
      title: "UX/UI Design Manager",
      company: "DesignHub",
      expertise: ["User Research", "Interaction Design", "Design Systems"],
      experience: 9,
      rating: 4.8,
      reviews: 31,
      hourlyRate: 80,
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 6,
      name: "Lisa Rodriguez",
      title: "Startup Advisor",
      company: "VentureX",
      expertise: ["Fundraising", "Business Strategy", "Pitch Development"],
      experience: 15,
      rating: 5.0,
      reviews: 42,
      hourlyRate: 120,
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  // Filter mentors based on search and filters
  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      searchQuery === "" ||
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesIndustry =
      industry === "" ||
      mentor.title.toLowerCase().includes(industry.toLowerCase()) ||
      mentor.company.toLowerCase().includes(industry.toLowerCase())

    const matchesExperience = mentor.experience >= experience[0]

    return matchesSearch && matchesIndustry && matchesExperience
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Find Your Mentor</h1>
          <p className="text-gray-600">Connect with experienced professionals in your field</p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0" onClick={() => setShowFilters(!showFilters)}>
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search by name, skills, or expertise..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {showFilters && (
          <div className="grid md:grid-cols-3 gap-6 mt-4 p-4 border rounded-lg bg-gray-50">
            <div>
              <Label htmlFor="industry">Industry/Field</Label>
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="data">Data Science</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Minimum Years of Experience: {experience[0]}</Label>
              <Slider value={experience} min={1} max={20} step={1} onValueChange={setExperience} className="mt-2" />
            </div>
            <div className="flex items-end">
              <Button
                className="w-full"
                onClick={() => {
                  setSearchQuery("")
                  setIndustry("")
                  setExperience([5])
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <Card key={mentor.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{mentor.name}</h3>
                    <p className="text-sm text-gray-600">
                      {mentor.title} at {mentor.company}
                    </p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm ml-1">
                        {mentor.rating} ({mentor.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.expertise.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <span>${mentor.hourlyRate}/hour</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{mentor.experience} years exp.</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between bg-gray-50 p-4">
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Book Session
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredMentors.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-bold mb-2">No mentors found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
          <Button
            onClick={() => {
              setSearchQuery("")
              setIndustry("")
              setExperience([5])
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  )
}

